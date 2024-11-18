import jieba
import jieba.posseg
import os
from markdown_it import MarkdownIt
from collections import defaultdict

pwd = os.path.dirname(os.path.abspath(__file__))

jieba.enable_paddle()

# Function to extract plain text from markdown content using markdown-it
def extract_text_from_markdown(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    # Initialize MarkdownIt parser
    md = MarkdownIt()

    # Parse the markdown content and convert it to plain text
    # Using `md.parse()` will give us a list of tokens, we extract the text
    parsed_content = md.parse(md_content)

    # Extracting only the text part (ignoring HTML tags and other components)
    text_content = ''
    for token in parsed_content:
        # Skip code block and math block tokens
        if token.type == 'code_block' or token.type == 'fence':
            continue
        # Check if the token is of type 'inline' and has text content
        if token.type == 'inline':
            text_content += token.content

    return text_content

# Function to segment text using jieba
def segment_text(text):
    # Use jieba to segment text
    return list(jieba.posseg.cut(text, use_paddle=True))

# Directory containing your markdown files
markdown_directory = os.path.join(pwd, "../docs")
output_file_path = os.path.join(pwd, "../scripts/jieba.txt")

# Set to store unique (word, flag) pairs
unique_words = defaultdict(int)
# Open the output file in write mode
with open(output_file_path, 'w', encoding='utf-8') as output_file:
    # Loop through all files in the directory recursively
    for root, dirs, files in os.walk(markdown_directory):
        for filename in files:
            if filename.endswith('.md'):  # Process only markdown files
                file_path = os.path.join(root, filename)

                # Extract text from markdown (without code blocks and math)
                text = extract_text_from_markdown(file_path)

                # Perform segmentation using Paddle mode
                for word, flag in segment_text(text):
                    if flag == 'x':
                        continue
                    # Add (word, flag) pair to the set to ensure uniqueness
                    unique_words[(word, flag)] += 1

                print(f"Processed {filename}")

    # Write unique segmented words and their flags to the output file
    for (word, flag), frequency in unique_words.items():
        output_file.write('%s %s %s\n' % (word, frequency, flag))

print(f"Segmentation complete. All output saved to {output_file_path}")
