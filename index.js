const quote=document.getElementById('quote')
quote.innerText="If you are not willing to risk the usual, you will have to settle for the ordinary."
const infobox=document.querySelectorAll(".info-box")
infobox.forEach((item)=>{
    item.style.backgroundColor="red"
})

const listItems = document.querySelectorAll(' li')
  listItems[2].textContent = "Updated Task 3"
  const footerContent=document.querySelector('footer span')
  footerContent.textContent+=" Have a great day"