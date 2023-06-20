const main = document.getElementById("main");
//const APIURL = "https://api.github.com/users/";

form.addEventListener('submit', function(e){
    e.preventDefault();

    let search=document.getElementById("search").value;
    //Sirve para unir las palabras de la busqueda
    let originalName = search.split(' ').join('');


   axios.get("https://api.github.com/users/"+originalName)
       /* con FETCH
       fetch(APIURL+originalName)
       .then((result) => result.json())
        .then((data) => { */
        .then((response) =>{
            if(response.status === 200){
            const data = response.data;
            console.log(data);

          /*  if(data.message === "Not found"){
                message=document.createElement("h2");
                message.textContent= "No profile with this username";
                message.classList.add('user-info');

                profile = document.createElement("div");
                profile.classList.add('card');
                profile.appendChild(message);
                main.appendChild(profile);
            }
            else
            {*/
            //Creamos los elementos CSS a partir de los datos de la API
            profile = document.createElement("div");
            profile.classList.add('card');
            main.appendChild(profile);

            avatarImg= document.createElement("img");
            avatarImg.src = data.avatar_url;
            avatarImg.classList.add('avatar');
            profile.appendChild(avatarImg);


            //Accedemos a los datos del enlace de repositorios de la API
            axios.get(data.repos_url)
              /* CODIGO SI SE HICIERA CON FETCH
                const repo= data.repos_url;
                fetch(repo) 
               .then((result) => result.json())
                .then((repoData) =>{*/
                .then((response) =>{
                    const repoData = response.data;

                    list=document.createElement("ul");
                    list.classList.add('user-info');
                    profile.appendChild(list);
                    

                    repoData.forEach((repo) => {
                        listItem=document.createElement("li");
                        listItem.textContent= repo.name;
                        listItem.classList.add('repo');
                        list.appendChild(listItem);   
                    });                     
            })
         
            profileData = document.createElement("div");
            profileData.classList.add('user-info');
            profile.appendChild(profileData);
            

            nameProfile= document.createElement("h2");
            nameProfile.textContent = data.name;
            nameProfile.classList.add('user-info');
            profileData.appendChild(nameProfile);

            infoProfile=document.createElement("h5");
            infoProfile.textContent = data.bio;
            infoProfile.classList.add('user-info');
            profileData.appendChild(infoProfile);  

            listFollow=document.createElement("ul");
            listFollow.classList.add('user-info');
            profileData.appendChild(listFollow);

            itemFollowers= document.createElement("li");
            itemFollowers.textContent = `${data.followers} Followers`;
            itemFollowers.classList.add('user-info');
            listFollow.appendChild(itemFollowers);

            itemFollowing=document.createElement("li");
            itemFollowing.textContent = `${data.following} Following`;
            itemFollowing.classList.add('user-info');
            listFollow.appendChild(itemFollowing);

            itemRepos=document.createElement("li");
            itemRepos.textContent = `${data.public_repos} Repos`;
            itemRepos.classList.add('user-info');
            listFollow.appendChild(itemRepos);
        }})   

        .catch((error) =>{
            console.log(error);

            message=document.createElement("h2");
            message.classList.add('user-info');
            message.textContent= "No profile with this username";
            profile = document.createElement("div");
            profile.classList.add('card');
            profile.appendChild(message);
            main.appendChild(profile);
            
        });
})
    
  