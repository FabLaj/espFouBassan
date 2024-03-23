const url = "https://apifoubassan.azurewebsites.net/";

export async function getData(params)
{
   let data = "";
   let response = await fetch(url + params);
   console.log(response);
   if(response.status >= 400)
   {
      console.log("Erreur: " + response.statusText);
   }
   else
   {
      data = await response.json();
   }
   return data;
}