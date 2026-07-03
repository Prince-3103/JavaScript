fetch("https://randomuser.me/api/?results=3")
    .then(rawData => rawData.json())
    .then(data =>{
        data.results.forEach((user)=>{
            const card  = document.createElement("div");
            card.className = "bg-gray-800 rounded-xl shadow-xl p-6 max-w-sm w-full";

            const innerFlex = document.createElement("div");
            innerFlex.className = "flex items-center space-x-4";

            const avatar = document.createElement("img");
            avatar.className = "w-16 h-16 rounded-full object-cover border-2 border-blue-500";
            avatar.src = user.picture.medium;
            avatar.alt = "User Avatar";
            innerFlex.appendChild(avatar);


            const info = document.createElement("div");
            
            const name = document.createElement("h2");
            name.className = "text-xl font-semibold text-gray-100";
            name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
            info.appendChild(name);

            const mail = document.createElement("p")
            mail.className = "text-gray-400 text-sm";
            mail.textContent = user.email;
            info.appendChild(mail);

            const bio = document.createElement("span");
            bio.className = "inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full";
            bio.textContent = "Gooner";
            info.appendChild(bio);

            innerFlex.appendChild(info);

            card.appendChild(innerFlex);

            document.querySelector(".stack").appendChild(card);
            console.log(user.name)
        })
    })