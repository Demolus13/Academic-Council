import os
from PIL import Image

input_directory = "public/Images"
output_directory = "public/Images"
quality = 50

os.makedirs(output_directory, exist_ok=True)

# List all output files
output_files = set(os.listdir(output_directory))

for i in range(100):
    print(i)
    for filename in os.listdir(input_directory):
        if filename.endswith((".png", ".jpg", ".jpeg", ".JPG", ".heic", ".HEIC")):
            input_path = os.path.join(input_directory, filename)
            output_filename = os.path.splitext(filename)[0] + ".webp"
            output_path = os.path.join(output_directory, output_filename)

            try:
                img = Image.open(input_path)
                img.save(output_path, 'webp', quality=quality)
                print(f"Converted: {input_path} -> {output_path}")
                output_files.add(output_filename)
            except Exception as e:
                print(f"Error converting {input_path}: {str(e)}")

    # Remove all files except .svg and .webp in the output directory
    for filename in output_files.copy():
        if not filename.endswith((".svg", ".webp", ".py")):
            file_path = os.path.join(output_directory, filename)
            os.remove(file_path)
            print(f"Removed: {file_path}")
            output_files.remove(filename)

    print("Conversion and removal complete.")
