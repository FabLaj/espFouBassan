const url = "https://apifoubassan.azurewebsites.net/";

export async function getData(params)
{
   let response = await fetch(url + params);
   let data = await response.json();
   return data;
}