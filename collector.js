var CollectorObject = {
    CreateCollectorModal: function () {
        // creating modal and appending it...
        const html = document.getElementsByTagName("html")[0];
        const modal = document.createElement("div");
        modal.id = "collectorModal";
        modal.className = "collector-modal";
        modal.innerHTML = '<div class="collector-modal-content"><div class="collector-modal-header">' +
            '<div class="" style="width: 50%; max-height: 400px;" > ' +
            '<img class="fit-picture" style="width: 100%; height: 100%;"' +
            'src = "https://cdn.pixabay.com/photo/2022/07/30/03/13/eibsee-7352987_960_720.jpg" ' +
            'alt = "Resim" > ' +
            '</div > ' +
            '<div class="collector-form"> ' +
            '<div> ' +
            '<span class="collector-modal-close">&times;</span>' +
            '</div > ' +
            '<div id="collectorForm" class="collector-form-inner" > ' +
            '<div> ' +
            '<h2 class="collector-title">Title</h2>' +
            '<h4 class="collector-title">Short Text</h4>' +
            '<h5 id="collectorErrorText" style="color: red; display:none;" class="collector-title">Invalid data. Please check your inputs!</h4>' +
            '<h5 id="collectorErrorGDPR" style="color: red; display:none;" class="collector-title">Please accept GDPR!</h4>' +
            '</div > ' +
            '<label style="margin: 5px auto;"><b>Email</b></label> '+
            '<input class="collector-input" type="text" placeholder="Enter Email" id="collectorEmail" required> ' +
            '<label style="margin: 5px auto;"><b>Phone Number</b></label> ' +
            '<input class="collector-input" type="number" placeholder="Enter Phone Number" id="collectorPhone" required> ' +
            '<button id="collectorSubmit" style="margin: 10px auto; font-weight:800;background-color: #6a6a6a;color: white;border: none; "class="collector-input" type="submit">BE FIRST</button> ' +
            '<div class="collector-checkbox-wrapper"> ' +
            '<input id="collectorGDPR" class="collector-checkbox" type="checkbox">' +
            '<a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation" target="_blank">By submitting this form you are giving your consent for your data to be used and disclosed *</a>'+
            '</div > ' +
            '</div > ' +
            '</div > ' +
            '</div > ' +
            '</div > ';
        html.appendChild(modal);
        this.AddCollectorModalStyles();

        // close when clicked outside of the modal
        window.onclick = function (event) {
            if (event.target == document.getElementById('collectorModal')) {
                modal.style.display = "none";
            }
        }

        document.getElementById('collectorSubmit').onclick = function () {

            let gdpr = document.getElementById('collectorGDPR').checked;

            if (!gdpr) {
                document.getElementById('collectorErrorGDPR').style.display = "block";
                return;
            } else {
                document.getElementById('collectorErrorGDPR').style.display = "none";
            }

            CollectorObject.Submit().then((data) => {
                if (data.status == 200) {
                    document.getElementById('collectorForm').innerHTML = '<h2 style="margin: 40% auto;" class="collector-title">Thank You!</h2>';
                } else {
                    document.getElementById('collectorErrorText').style.display = "block";
                }
            });
        }

        var span = document.getElementsByClassName("collector-modal-close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    },
    AddCollectorModalStyles: function () {
        // adding styles...
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.collector-modal { display: flex;' +
            'position: fixed; /* Stay in place */' +
            'z-index: 99999; /* Sit on top */' +
            'left: 0;' +
            'top: 0;' +
            'align-content: center;' +
            'justify-content: center;' +
            'width: 100%; /* Full width */' +
            'height: 100%; /* Full height */' +
            'overflow: auto; /* Enable scroll if needed */' +
            'background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */ }';
        style.innerHTML += '.collector-modal-content { ' +
            'position: relative;' +
            'background-color: #fefefe;' +
            'margin: auto;' +
            'padding: 0;' +
            'width: 50%;' +
            'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);' +
            '-webkit-animation-name: animatetop;' +
            '-webkit-animation-duration: 0.4s;' +
            'animation-name: animatetop;' +
            'animation-duration: 0.4s }';
            'background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */ }';
        style.innerHTML += '.collector-modal-close {' +
            '  color: grey;' +
            '  float: right;' +
            '  font-size: 28px;' +
            '  font-weight: bold;' +
            '}' +
            '.collector-modal-close:hover,' +
            '.collector-modal-close:focus {' +
            '  color: red;' +
            '  text-decoration: none;' +
            '  cursor: pointer;' +
            '}' +
            '.collector-modal-header {' +
            '  display: flex;' +
            '  color: black;' +
            '}';
            style.innerHTML += '.collector-form { padding: 2px 16px;' +
            'display: flex;' +
            'width: 50%;' +
            'flex-direction: column;' +
            '}';
            style.innerHTML += '.collector-form-inner {' +
            'display: flex;' +
            'width: 100%;' +
            'height: 100%;' +
            'flex-direction: column;' +
            '}';
            style.innerHTML += '.collector-input { padding: 2px 16px;' +
            'font-size: 12px;' +
            'width: 75%;' +
            'padding: 5px;' +
            'margin: 0 auto;' +
            'border: solid black 1px;' +
            'border-radius: 5px;' +
            '}';
            style.innerHTML += '.collector-checkbox-wrapper {'+
            'font-size: 12px;' +
            'width: 75%;' +
            'margin: 0 auto !Important;' +
            'display: flex;' +
            'justify-content: flex-start;' +
            'align-items: center;' +
            '}';
            style.innerHTML += '.collector-checkbox {'+
            'width: 40px;' +
            'height: 40px;' +
            'margin: 0px!important;' +
            'margin-right: 5px !important;' +
            'padding: 0px!important;' +
            '}';
            style.innerHTML += '.collector-title {'+
            'text-align: center;' +
            'width: 75%;' +
            'margin: 5px auto;' +
            '}';
            style.innerHTML += '@media only screen and (max-width: 768px) { .collector-modal-content {'+
            'width: 100%;' +
            '}' +
            '.collector-input, .collector-checkbox-wrapper, .collector-title { ' + 
            'width: 90%;' +
            '}' +
            '}';
            style.innerHTML += 'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {' +
            '-webkit-appearance: none;' +
            'margin: 0;' +
            '}';
   
        document.getElementsByTagName('head')[0].appendChild(style);
    },
    ShowCollectorModal: function () {
        const html = document.getElementsByTagName("html")[0];
        const modal = document.createElement("div");
        html.appendChild(modal);
    },
    Submit: async function () {
        let url = 'https://insider-optimus.herokuapp.com/lead-collection';
        let email = document.getElementById('collectorEmail').value;
        let phoneNumber = document.getElementById('collectorPhone').value;
        let data = {
            "phone": phoneNumber,
            "email": email
        };
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response; // parses JSON response into native JavaScript objects
    },
    InjectJs: function () { // copy and paste to browser console. current ip and port belong to my local web server.
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'http://127.0.0.1:8887/collector.js';
        document.head.appendChild(script);
    }
}
