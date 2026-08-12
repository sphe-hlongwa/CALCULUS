import os
import re

dirs = ['assets/js', 'assets/css', '.']
emoji_pattern = re.compile("[\U00010000-\U0010ffff]")

for d in dirs:
    for f in os.listdir(d):
        path = os.path.join(d, f)
        if os.path.isfile(path) and path.endswith(('.js', '.html', '.css')):
            with open(path, 'r', encoding='utf-8') as file:
                lines = file.readlines()
                for i, line in enumerate(lines):
                    if emoji_pattern.search(line):
                        print(f"{path}:{i+1} -> {line.strip()}")
