document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("email-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (email !== "" && message !== "") {
        sendEmail(email, message);
      }
    });
  
    function sendEmail(email, message) {
      console.log("Email sent to:", email);
      console.log("Message:", message);
      
    }
  });


document.addEventListener("DOMContentLoaded", function() {
  // Manually defined states and cities data
  const statesData = [
    { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Thane", "Amravati", "Kolhapur", "Sangli", "Navi Mumbai", "Akola", "Latur", "Jalgaon", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani", "Jalna", "Bhusawal", "Nanded", "Satara", "Beed", "Wardha", "Yavatmal", "Ratnagiri", "Osmanabad", "Sangamner", "Gondia", "Barshi", "Achalpur", "Akkalkot", "Ahmedpur", "Ajara", "Ajra", "Alandi Devachi", "Alibag", "Amalner", "Ambad", "Ambajogai", "Ambarnath", "Ambejogai", "Anjangaon", "Arvi", "Ashti", "Ashti", "Aurad", "Balapur", "Ballarpur"] },
    { name: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Bellary", "Shimoga", "Tumkur"] },
    { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Erode", "Vellore", "Thoothukudi"] },
    { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Prayagraj", "Bareilly", "Aligarh", "Moradabad", "Saharanpur"] },
    { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Nadiad"] },
    { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar"] },
    { name: "West Bengal", cities: ["Kolkata", "Domkal", "Berhampore", "Murshidabad", "Islampur", "Jiaganj", "Hariharpara", "Jalangi", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "Malda", "Baharampur", "Habra", "Kharagpur", "Shantipur", "Bangaon", "Medinipur", "Krishnanagar", "Ranaghat", "Haldia", "Raiganj", "Balurghat", "Santipur", "Contai", "Cooch Behar", "Kulti", "Bansberia", "Nabadwip", "Suri", "English Bazar", "Jangipur", "Bankura", "Dhulian", "Gangarampur", "Darjeeling", "Bolpur", "Sainthia", "Rampurhat", "Arambagh", "Alipurduar", "Purulia", "Jhargram", "Kalimpong", "Chakdaha", "Gangtok", "Rishra", "Chinsurah"] },

    { name: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Begusarai", "Arrah", "Katihar", "Chhapra"] },
    { name: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kadapa", "Rajahmundry", "Tirupati", "Anantapur", "Vizianagaram"] },
    { name: "Madhya Pradesh", cities: ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"] }
  ];

  // Function to populate states dropdown
  function populateStatesDropdown() {
    const inputState = document.getElementById("inputState");
    inputState.innerHTML = '<option selected>Choose...</option>';
    statesData.forEach(state => {
      const option = document.createElement("option");
      option.textContent = state.name;
      inputState.appendChild(option);
    });
  }

  // Function to populate cities dropdown based on selected state
  function populateCitiesDropdown(selectedState) {
    const inputCity = document.getElementById("inputCity");
    inputCity.innerHTML = '<option selected>Choose...</option>';
    const selectedStateData = statesData.find(state => state.name === selectedState);
    if (selectedStateData) {
      selectedStateData.cities.forEach(city => {
        const option = document.createElement("option");
        option.textContent = city;
        inputCity.appendChild(option);
      });
    }
  }

  populateStatesDropdown();

  // Event listener for state change
  document.getElementById("inputState").addEventListener("change", function() {
    const selectedState = this.value;
    populateCitiesDropdown(selectedState);
  });

  // Function to validate form fields
  function validateForm() {
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const address = document.getElementById("inputAddress").value;
    const state = document.getElementById("inputState").value;
    const city = document.getElementById("inputCity").value;
    const zip = document.getElementById("inputZip").value;
    const isChecked = document.getElementById("gridCheck").checked;

    // Check if any field is empty
    if (
      !email ||
      !password ||
      !address ||
      state === "Choose..." ||
      city === "Choose..." ||
      !zip ||
      !isChecked
    ) {
      alert("Please fill out all fields.");
      return false;
    }

    return true;
  }

  document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("submit_button").addEventListener("click", function(event) {
s
      if (!validateForm()) {
        event.preventDefault();
      } else {

        this.style.display = "none";
  
        sessionStorage.setItem("signupSubmitted", true);
      }
    });
  
    // Check if the signup form is submitted
    const signupSubmitted = sessionStorage.getItem("signupSubmitted");
    if (signupSubmitted) {
   
      document.getElementById("submit_button").style.display = "none";
  
      sessionStorage.removeItem("signupSubmitted");
    }
  });
  

  function validateForm() {
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const address = document.getElementById("inputAddress").value;
    const state = document.getElementById("inputState").value;
    const city = document.getElementById("inputCity").value;
    const zip = document.getElementById("inputZip").value;
    const isChecked = document.getElementById("gridCheck").checked;
  

    if (
      !email ||
      !password ||
      !address ||
      state === "Choose..." ||
      city === "Choose..." ||
      !zip ||
      !isChecked
    ) {
      alert("Please fill out all fields.");
      return false;
    }
  

  
    return true;
  }
  

});








