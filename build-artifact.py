# Builds one self-contained page for claude.ai (no doctype/head; scripts inlined).
import re, sys, pathlib
root = pathlib.Path(__file__).parent
html = (root / 'index.html').read_text()
head = re.search(r'<head>(.*)</head>', html, re.S).group(1)
head = re.sub(r'<meta charset="utf-8">\s*|<meta name="viewport"[^>]*>\s*', '', head)
body = re.search(r'<body>(.*)</body>', html, re.S).group(1)
body = re.sub(r'<script src="([^"]+)"></script>', lambda m: '<script>\n' + (root / m.group(1)).read_text() + '\n</script>', body)
out = pathlib.Path(sys.argv[1])
out.write_text(head.strip() + '\n' + body.strip() + '\n')
print(out, out.stat().st_size)
