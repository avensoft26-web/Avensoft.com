import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # item is (R, G, B, A)
        r, g, b, a = item
        
        # If the pixel is very dark (black/dark navy) and not fully transparent
        # The text "AVENSOFT" is very dark. Let's say if r, g, b are all < 50
        if r < 80 and g < 80 and b < 80 and a > 0:
            # Change it to white, keeping the same alpha
            new_data.append((255, 255, 255, a))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Successfully processed logo: {output_path}")

if __name__ == "__main__":
    process_logo(r"c:\MY_PROJECTS\Avensoft\public\AVENSOFT.png", r"c:\MY_PROJECTS\Avensoft\public\AVENSOFT-dark-theme.png")
