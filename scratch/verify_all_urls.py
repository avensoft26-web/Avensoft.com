import urllib.request
import re

req = urllib.request.Request('http://localhost:3000/Avensoft.com/')
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    
    imgs = set(re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', html))
    print(f"Testing {len(imgs)} unique image URLs on localhost:")
    all_ok = True
    for img in sorted(imgs):
        if img.startswith('http'):
            url = img
        else:
            url = f"http://localhost:3000{img}"
        
        try:
            r = urllib.request.Request(url, method='HEAD')
            with urllib.request.urlopen(r) as res:
                status = res.status
                print(f"  [{status}] {img}")
        except urllib.error.HTTPError as e:
            print(f"  FAILED [{e.code}] {img} -> {url}")
            all_ok = False
        except Exception as e:
            print(f"  ERROR {e} for {img}")
            all_ok = False
            
    if all_ok:
        print("\nALL IMAGES RETURNED 200 OK! ZERO BROKEN IMAGES!")
    else:
        print("\nSOME IMAGES FAILED!")
except Exception as e:
    print("Main fetch error:", e)
