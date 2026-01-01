const counters = document.querySelectorAll(".counter");

const runCounter = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const update = () => {
      const inc = Math.ceil(target / 100);
      count += inc;

      if (count < target) {
        counter.innerText = count;
        setTimeout(update, 20);
      } else {
        counter.innerText =
          target + (counter.nextElementSibling.innerText.includes("Satisfaction") ? "%" : "+");
      }
    };

    update();
  });
};

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    runCounter();
    observer.disconnect();
  }
});

observer.observe(document.querySelector(".stats"));




//aya

  let menu_btn = document.querySelector('.menu-btn');
    let menu_close = document.querySelector('.menu-close');
    let underLine_Navbar = document.querySelectorAll('header a');

       menu_btn.onclick = function(){
        document.querySelector('.menu-mobile').classList.add('menu-show');
    }
    menu_close.onclick = function(){
        document.querySelector('.menu-mobile').classList.remove('menu-show');
    }