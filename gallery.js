const response = await fetch(
  "https://raw.githubusercontent.com/Spaxe/love-about-food/main/submissions.csv"
);
const usertext = await response.text();
const data = Papa.parse(usertext, { header: true, skipEmptyLines: true }).data;

console.log(data);

const gallery = document.getElementById("online-gallery");
const template = (count, text, imgUrl) => `
<div class="plate">
<div class="bg-element">
  <svg
    xmlns="https://www.w3.org/2000/svg"
    xml:lang="en"
    xmlns:xlink="https://www.w3.org/1999/xlink"
    viewBox="0 0 500 500"
  >
    <defs>
      <path
        id="textcircle-${count}"
        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
        transform="rotate(0,250,250)"
      />
    </defs>
    <text>
      <textPath
        class="text-1"
        xlink:href="#textcircle-${count}"
        aria-label="${text}"
      >
        &#160;${text}&#160;
      </textPath>
    </text>
  </svg>
  <div class="bg-plate">
    <img src="${imgUrl}" />
  </div>
</div>
</div>
`;

data.forEach((entry, i) => {
  const plate = template(i, entry.message, entry.image);
  gallery.innerHTML += plate;
});
