import urllib.request
import re

html = urllib.request.urlopen("http://localhost:3000").read().decode("utf-8", errors="ignore")
tags = re.findall(r'<link[^>]*rel="[^"]*icon"[^>]*>', html)
for t in tags:
    print(t)
