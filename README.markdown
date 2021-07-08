# Love About Food (Web component)

![Cover photo](https://raw.githubusercontent.com/Spaxe/love-about-food/main/doc/cover.jpg)

Love About Food is an interactive augmented reality exhibition where memories, fondness, and love for food collide in the public realm.

This web component interacts with another component written in TouchDesigner.

### Visit the phsyical exhibition (11-13 July, 2021)

[Book your slot](https://chitaly2021.inf.unibz.it/interactive_experiences.html) at CHItaly 2021 Interactive Experiences track.

### Visit the online exhibition

- [Share a food memory](https://loveaboutfood.com/)

- [Visit the online exhibition](https://loveaboutfood.com/gallery.html)

# Web component contributor guide

You will first need access to the [Form Taxi](https://form.taxi/) account. Please contact us and we will help you set it up.

### Prerequisites

- a Form.taxi account (for access to new photos and messages)
- a GitHub account (for updating the user submissions)
- Basic knowledge of `git`, photo editing, and editing CSV files.

#### How to update the exhibition photos

Due to potentially inappropriate user-submitted content, we have decided to make the update a manual one. Furthermore, form.taxi doesn't allow an automatic trigger whenever a new submission is added.

You should **clone this repository** to be able to update the exhibition. You will need contributor permission to this repo. Please get in touch with Xavier <xavier.ho@monash.edu> for assistance.

##### Step 1: New message is submitted.

You should receive an email from form.taxi (make sure the email notification is turned on) about the new submission. If it's inappropriate, mark as spam. If it doesn't have images, ignore it.

If the content looks good and you can log into form.taxi to see the image, proceed to next steps.

##### Step 2: Edit the photo.

Use the supplied template in the `templates` folder to resize and crop the photo into a 720x720 px circle on transparent background.

Export the image for web (**must be PNG**) in the `images` folder, and name it for the next number.

##### Step 3: Add to the CSV file.

On Form.taxi, export the latest entries as a CSV file. Open it up in a text editor and copy the new line into `submissions.csv` in its own line.

Make sure you replace the `image` URL from the Form.Taxi one (doesn't work) to the website's own URL. e.g. `https://loveaboutfood.com/images/image-XX.png....`

> **Note:** It is very important that the image is named `image-XX`.png` in that format for TouchDesigner to pick it up.

An example of a CSV entry is given below.

```
"2021-06-29 16:39:27","I love paella because it reminds me to the summers on the beach with my family",https://loveaboutfood.com/images/image-40.png
```

##### Step 4: Save, commit, push

Add both the image and CSV to a new git commit, and then push it to GitHub. It will be published within seconds.

You should be able to see the new image and text on the gallery page ([link](https://loveaboutfood.com/gallery.html)), as well as on the physical exhibition via the TouchDesigner files.

That's it!

## Physical installation

For the TouchDesigner files and assets, please contact us to discuss how to set this up.

### Prerequisites

- Internet connection (the food and memories are pulled from a live server)
- 2m high pedestal for the projector (as long as foot traffic doesn’t overly block projection is OK)
- 5m x 3m drywall
- Power sockets x 2 (for the projector and the computer)
- Laptop (Windows or MacOS)
- Projector
- Optional, but would be ideal:
  - White plates, no markings
  - Plates mounting solution (3M easy remove, no residue)

# Credits

We would like to acknowledge CHItaly 2021 Interactive Experiences organisers: María Menéndez-Blanco, Seçil Uğur Yavuz, and Jennifer Schubert, for organising the virtual exhibition for this project.

We would also like to thank Vito Bela at Monash University for offering the initial installation prototype assistance.

Love About Food is designed by [Xavier Ho](https://research.monash.edu/en/persons/xavier-ho), [Indae Hwang](https://research.monash.edu/en/persons/indae-hwang), and [Yun Tae Nam](http://www.yuntaenam.com/), at Monash University, Australia.
