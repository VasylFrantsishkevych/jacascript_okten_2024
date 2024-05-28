

let baseURL = 'http://jsonplaceholder.typicode.com';
let getUsers = `${baseURL}/users`;

let idOfUser = new URL(location.href).searchParams.get('id');
let urlGetUserById = new URL(getUsers);
urlGetUserById.searchParams.set('id', idOfUser)

let detailsContainer = document.getElementsByClassName('details')[0];

fetch(urlGetUserById)
    .then(res => res.json())
    .then(details => {
        console.log(details[0]);
        const {name, username, phone, email, website, address, company} = details[0];
        //block name and contact
        let userInfoBlock = document.createElement('div');
        userInfoBlock.classList.add('user-info');

        let nameBlock = document.createElement('div');
        nameBlock.classList.add('user-info-name');
        nameBlock.innerHTML = `
                                    <h3>${name} - ${username}</h3>
                                    <h3>phone: ${phone}</h3>
                                    `;

        let contactBlock = document.createElement('div');
        contactBlock.classList.add('user-info-name');
        contactBlock.innerHTML = `
                                     <h3>email: ${email}</h3>
                                     <h3>website: ${website}</h3>
                                     `;

        userInfoBlock.append(nameBlock, contactBlock);

        // block address
        let userAddressBlock = document.createElement('div');
        userAddressBlock.classList.add('user-address');

        let addressBlock = document.createElement('div');
        addressBlock.classList.add('user-address-list')

        let geoBlock = document.createElement('div');
        geoBlock.classList.add('user-address-list');

        let ulAddress = document.createElement('ul');
        ulAddress.innerHTML = '<strong>Address</strong>';

        for (const addressKey in address) {
            if (addressKey !== 'geo') {
                let liAddress = document.createElement('li');
                liAddress.innerText = `${addressKey}: ${address[addressKey]}`;
                ulAddress.appendChild(liAddress);
            } else {
                let ulGeo = document.createElement('ul');
                ulGeo.innerHTML = '<strong>Geo</strong>';
                geoBlock.appendChild(ulGeo);

                for (const geoKey in address.geo) {
                    let liGeo = document.createElement('li');
                    liGeo.innerText = `${geoKey}: ${address.geo[geoKey]}`;
                    ulGeo.appendChild(liGeo);
                }
            }
        }

        let companyBlock = document.createElement('div');
        companyBlock.classList.add('user-address-list');

        let ulCompany = document.createElement('ul');
        ulCompany.innerHTML = '<strong>Company</strong>';
        companyBlock.appendChild(ulCompany);

        for (const companyKey in company) {
            let liCompany = document.createElement('li');
            liCompany.innerText = `${companyKey}: ${company[companyKey]}`;
            ulCompany.appendChild(liCompany);
        }


        addressBlock.appendChild(ulAddress);
        userAddressBlock.append(addressBlock, geoBlock, companyBlock);

        detailsContainer.append(userInfoBlock, userAddressBlock);
    })
