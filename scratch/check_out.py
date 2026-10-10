import os
import re

out_dir = 'out'
all_bad = []
total_imgs = 0

for root, _, files in os.walk(out_dir):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as fp:
                content = fp.read()
            imgs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', content)
            total_imgs += len(imgs)
            for img in imgs:
                if not (img.startswith('/Avensoft.com') or img.startswith('http') or img.startswith('data:')):
                    all_bad.append((f, img))

print(f"Scanned ALL HTML files in out/: {total_imgs} total images checked.")
if not all_bad:
    print("SUCCESS: 100% of images in EVERY exported page have the correct /Avensoft.com prefix or external URL!")
else:
    print("WARNING: Found broken image paths:")
    for file, img in all_bad:
        print(f"  In {file}: {img}")
