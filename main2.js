// services section
const container = document.getElementById("services-container");
const spinner = document.getElementById("spinner")
const selectionFilter = document.getElementById("selection-filter")
const searchInput = document.getElementById("searchInput");
let services=[];







const getServices = async () => {
  try {
 spinner.style.display='block'
    const response = await fetch("https://694fafc18531714d9bceb1aa.mockapi.io/services");
    const data = await response.json();
    services = data;
    console.log(services);
      setTimeout(()=>{
        spinner.style.display= "none"
         filteration();

      },2000)

  } catch (error) {
        spinner.style.display= "none"
  
 console.log("Error fetching services :", error);
  }
};
getServices();

function displayService(list){
    container.innerHTML="";
    if (list.length === 0) {
    container.innerHTML = "<h1 style='font-size: 18px; color:white'> No Services Found</h1>";
    return;
  }
  list.forEach((service)=>{
      // create div to display services
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";

serviceCard.innerHTML=`
<div class="">

  <div class="service-img">
  <img src="${service.image}"/>

  </div>
<div class="serviceCard-body">
  <h3 class="service-name">${service.name}</h3>
  <p class="service-desc">${service.description}</p>
 <div class="tech-tags">

  ${service.technologies
    .split(',')
    .map(tech => `<span class="technology">${tech}</span>`)
    .join('')}
</div>

</div>

</div>
`


container.appendChild(serviceCard);


  })
}

// --------------------------------------------------------------------
//filtration

const savedCategory = localStorage.getItem("perfectedCategory");
const savedSearch = localStorage.getItem("perfectedSearch");

if (savedCategory) {
  selectionFilter.value = savedCategory;
}
if (savedSearch) {
  searchInput.value = savedSearch;
}

function filteration(){
    if (!services.length) return;

  let filterServices = services
  //searcging in input 
 const searchValue = searchInput.value.toLowerCase().trim();

localStorage.setItem("perfectedSearch", searchValue)
  filterServices = filterServices.filter(
    (service) =>{
      return(
           service.name.toLowerCase().includes(searchValue) ||
      service.category.toLowerCase().includes(searchValue) ||
      service.description.toLowerCase().includes(searchValue)
      )
    }
   
  );

  const selectedCategory = selectionFilter.value
      localStorage.setItem("perfectedCategory", selectedCategory)



  if(selectedCategory !== "all"){
    filterServices = filterServices.filter((p)=>p.category === selectedCategory)
  }
    displayService(filterServices);

}

selectionFilter.addEventListener("change", filteration)
searchInput.addEventListener("input", filteration);


