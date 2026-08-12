import json
import re
import os

def parse_markdown(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    book = {
        "title": "Calculus Study Guide",
        "chapters": []
    }
    
    current_chapter = None
    current_content = []
    
    # Very basic heuristic for this specific PDF extraction
    for line in lines:
        if line.startswith('| Chapter') or re.match(r'^#+ (Chapter|\d+\.)', line, re.IGNORECASE):
            if current_chapter:
                current_chapter['content'] = '\n'.join(current_content)
                book['chapters'].append(current_chapter)
            current_chapter = {"title": line.strip().replace('|', '').strip(), "content": "", "sections": []}
            current_content = []
        else:
            current_content.append(line.strip())
            
    if current_chapter:
        current_chapter['content'] = '\n'.join(current_content)
        book['chapters'].append(current_chapter)
        
    # Fallback if parsing failed
    if not book['chapters']:
        book['chapters'].append({
            "title": "Full Content",
            "content": '\n'.join(line.strip() for line in lines)
        })
        
    return book

def generate_mock_additional_content():
    return {
        "practice_problems": [
            {"difficulty": "Beginner", "question": "Evaluate $\\int x^2 dx$", "solution": "$\\frac{x^3}{3} + C$"}
        ],
        "exam_tips": ["Always remember the constant of integration (+C)"]
    }

if __name__ == '__main__':
    input_file = r'c:\Users\Administrator\Desktop\Anonsurf\CALCULUS\CALCsem2sg.md'
    output_file = r'c:\Users\Administrator\Desktop\Anonsurf\CALCULUS\data\book_content.json'
    
    if os.path.exists(input_file):
        book_data = parse_markdown(input_file)
        
        # Add additional learning material
        for chapter in book_data['chapters']:
            chapter['additional_material'] = generate_mock_additional_content()
            
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(book_data, f, indent=4)
        print(f"Successfully generated {output_file}")
    else:
        print(f"Input file not found: {input_file}")
