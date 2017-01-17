import sys
import csv
import random

def rand_class(classes):
    return classes[random.randint(0, len(classes)-1)]

def add_classes(csv_file_name, classes):
    with open(csv_file_name) as csvfile:
        with open('your_new_file.csv', 'w') as newcsvfile:
            reader = csv.DictReader(csvfile)
            writer = None
            for row in reader:
                if writer is None:
                    fieldnames = row.keys()
                    fieldnames.append('class')
                    writer = csv.DictWriter(newcsvfile, fieldnames=fieldnames)
                    writer.writeheader()
                row['class'] = rand_class(classes)
                writer.writerow(row)


if __name__ == '__main__':
    csv_file_name = sys.argv[1]
    classes = range(5)
    add_classes(csv_file_name, classes)
