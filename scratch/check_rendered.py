import urllib.request
import re

req = urllib.request.Request('http://localhost:3000/Avensoft.com/')
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    
    imgs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', html)
    print(f"Found {len(imgs)} img tags in rendered HTML:")
    for img in imgs:
        print("  SRC:", img)
except Exception as e:
    print("Error:", e)
