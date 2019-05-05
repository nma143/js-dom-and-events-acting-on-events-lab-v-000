function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
function retrieveEmployeeInformation()
{
  return document.querySelector('input').value;
}
function addNewElementAsLi()
{
  let name = retrieveEmployeeInformation();
  return document.querySelector('.employee-list').append("%{anme}");
}
