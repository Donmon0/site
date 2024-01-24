document.addEventListener('DOMContentLoaded', function(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", 'localhost:8080/groups');

    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            const jsonObj = JSON.parse(xhr.responseText);

            console.log(jsonObj);
            for( var i of jsonObj){
                let tmp = getNewGroup(i);
                var NewGroup = document.getElementById('list-group');
                NewGroup.innerHTML += tmp;
                
            }
        }
    }
})

function getNewGroup(i){
    let tmp;

    let itime = getWakeupTime(i);
    console.log(itime)
    tmp =` 
    <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-bell-slash-fill" viewBox="0 0 16 16">
                  <path
                    d="M5.164 14H15c-1.5-1-2-5.902-2-7 0-.264-.02-.523-.06-.776L5.164 14zm6.288-10.617A4.988 4.988 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113l9.73-9.73zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                </svg>　${i.name}</span>
                <div class="text-center">
                <div>${itime}</div>
                <button type="button" id="${i.id}"class="btn btn-outline-dark ml-2" data-bs-toggle="modal"
                  data-bs-target="#groupInfo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-house-fill" viewBox="0 0 16 16">
                    <path
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                  </svg>
                </button>
              </div>
            </a>`;

    return tmp;
}

function getWakeupTime(group) {
  return group.wakeup_hour + ":" +  group.wakeup_min
}