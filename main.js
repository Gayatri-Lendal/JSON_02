var json_object = {
    "first_name":"Radha",
    "last_name":"Lendal",
    "age":19,
    "Education_status":"FY",
    "array":["apple","banana","chikoo"]
}

console.log(json_object);
document.write(json_object);
console.log("json_02");
// document.write(json_object.first_name);
// document.write(json_object.last_name);
// document.write(json_object.age);


//modify value
json_object.first_name="Gayatri";

//add new key value pair
json_object.middle_name="Suresh";

//delete a key value pair
delete json_object.middle_name; 

for(show_all_data in json_object){
    document.write("<br>" + json_object[show_all_data] + "<br>");
}

var Json_object = {
    "FIFA":[
        {
            "country_name":"Brazil",
            "best_player":"Neymar"
        },
        {
            "country_name":"Portugal",
            "best_player":"Ronaldo"

        },
        {
            "country_name":"Argentina",
            "best_player":"Messi"

        }
    ]
}

// document.write(Json_object.FIFA[1].best_player);

for(x in Json_object.FIFA){
    // document.write(x);
    for(inner_x in Json_object.FIFA[x]){
        document.write(Json_object.FIFA[x][inner_x] + "<br>");
    }
}

var sendata = {name:"Gaurav",lastName:"Sonawane"};
var changedata = JSON.stringify(sendata);
console.log(changedata);

