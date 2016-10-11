# canonicalify-images

Auto-rename image files to YYYYMMDD_HHMMSS format according their shooting time in EXIF. For example a JPG image shooted on 12th Oct 2016 at 22:30:23 is renamed to:

    20161012_223023.jpg

## Install

    $ npm install canonicalify-images -g

This provides global command `canonicalify`.

## Usage

Rename single image:

    $ canonicalify <img file path>

Rename images in a directory:

    $ canonicalify <directory>

## Try out

There is a TESTER.JPG under /test directory. You should be able to rename it to 20161009_145859.jpg by running:

    $ canonicalify test/TESTER.JPG test/
