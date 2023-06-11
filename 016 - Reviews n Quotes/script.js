const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const surpriseBtn = document.querySelector('button');
const userImg = document.querySelector('#image');
const userName = document.querySelector('.name');
const userRole = document.querySelector('.role');
const userDesc = document.querySelector('.desc');

var details = [{
  url: "https://images.pexels.com/photos/16053684/pexels-photo-16053684/free-photo-of-smiling-woman-with-long-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  name: "Susan Smith",
  role: "WEB DEVELOPER",
  desc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
},
{
  url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  name: "Anna Johnson",
  role: "WEB DESIGNER",
  desc: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
},
{
  url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  name: "Peter Jones",
  role: "INTERN",
  desc: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
},
{
  url: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Bill Anderson",
  role: "THE BOSS",
  desc: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
}];

var index = 0;

rightBtn.addEventListener('click', () => {
  index++;
  userImg.src = details[index].url;
  userName.textContent = details[index].name;
  userRole.textContent = details[index].role;
  userDesc.textContent = details[index].desc;
})

leftBtn.addEventListener('click', () => {
  index--;
  userImg.src = details[index].url;
  userName.textContent = details[index].name;
  userRole.textContent = details[index].role;
  userDesc.textContent = details[index].desc;
})

surpriseBtn.addEventListener('click', () => {
  let idx = Math.floor(Math.random() * 4);
  userImg.src = details[idx].url;
  userName.textContent = details[idx].name;
  userRole.textContent = details[idx].role;
  userDesc.textContent = details[idx].desc;
})