// 1. Get data form ✅
// 2. Validation value ✅
// 3. Display Mail Software ✅
// 4. Object

function submitForm() {
    // Get data form
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone').value;
    let subject = document.getElementById('input-subject').value;
    let message = document.getElementById('input-message').value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
    
    // Validation value
    if(name == ''){
        console.log('Name must be fill in bro...');
        return alert('Name must be fill in bro...');
    } 
    else if(email == ''){
        console.log('Email must be fill in bro...');
        return alert('Email must be fill in bro...');
    } 
    else if(phone == ''){
        console.log('Number Phone must be fill in bro...');
        return alert('Number Phone must be fill in bro...');
    } 
    else if(subject == ''){
        console.log('Subject must be fill in bro...');
        return alert('Subject must be fill in bro...');
    } 
    else if(message == ''){
        console.log('Message must be fill in bro...');
        return alert('Message must be fill in bro...');
    } 

    console.log('Semua form telah diisi ✅');

    // // Display Mail Software
    console.log('Open Mail');

    const a = document.createElement('a');
    let emailReceiver = 'sabdhamuhamadbagdja@gmail.com';
    a.href = `mailto:${emailReceiver}?subject=${subject}&body= Hello my name ${name}, ${subject}, ${message}, my phone number ${phone}`;
    a.target="_blank";
    a.click();

    // Object

    const dataObject = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(dataObject);
}