function showNextStep(stepNumber) {
    // Verstecke alle Schritte
    var steps = document.querySelectorAll('.step');
    steps.forEach(function(step) {
        step.style.display = 'none';
    });

    // Zeige den aktuellen Schritt
    var currentStep = document.getElementById('step' + stepNumber);
    if (currentStep) {
        currentStep.style.display = 'block';
    }

    // Wenn der letzte Schritt erreicht ist, fülle die Bestätigungsinformationen aus
    if (stepNumber === 6) {
        fillConfirmation();
    }
}

function updateBudgetValue(value) {
    document.getElementById('budgetValue').innerText = value + ' CHF';
}

function fillConfirmation() {
    var serviceType = document.getElementById('serviceType').value;
    var purpose = document.getElementById('purpose').value;
    var date1 = document.getElementById('date1').value;
    var date2 = document.getElementById('date2').value;
    var date3 = document.getElementById('date3').value;
    var budget = document.getElementById('budget').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var confirmationSummary = document.getElementById('confirmationSummary');
    confirmationSummary.innerHTML = `
        <p>Service-Typ: ${serviceType}</p>
        <p>Verwendungszweck: ${purpose}</p>
        <p>Gewählte Termine: ${date1 || 'keine'} ${date2 ? ', ' + date2 : ''} ${date3 ? ', ' + date3 : ''}</p>
        <p>Budget: CHF ${budget}</p>
        <p>E-Mail: ${email}</p>
        <p>Telefon: ${phone}</p>
    `;
}

function submitForm() {
    document.getElementById('bookingForm').submit();
}

document.querySelectorAll('.step button').forEach(button => {
    button.addEventListener('click', function() {
        var currentStep = this.closest('.step').id.replace('step', '');
        showNextStep(parseInt(currentStep) + 1);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    showNextStep(1);
});

const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
    'images/14.jpg',
    'images/15.jpg',
    'images/16.jpg',
    'images/17.jpg',
    'images/18.jpg',
  ];
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
    const backgroundImageElement = document.getElementById('background-image');
    backgroundImageElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  // Wechsle das Bild alle 5 Sekunden
  setInterval(changeBackgroundImage, 5000);
  
  // Initialer Aufruf
  changeBackgroundImage();