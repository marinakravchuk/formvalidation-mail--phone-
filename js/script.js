const form = document.querySelector(".form");
const tel = document.querySelector('input[type= "tel"]');
const inputMask = new Inputmask("+380 (99)-999-99-99");
inputMask.mask(tel);

const validation = new JustValidate('.form', {

});
validation.addField(".input-name", [{
    rule: "required",
    errorMessage: "Name is invaled"
},
{
    rule: "minLength",
    value: 1, 
    errorMessage: "Name is too short" 
}, 
{
    rule: "maxLength",
    value: 11, 
    errorMessage: "Name is too big" 
}
])
.addField(".input-mail", [{
    rule: "required",
    errorMessage: "Email is requered"
},
{
    rule: 'email',
    errorMessage: "Invalid email address"
}])
.addField(".input-tel", [
    {
        rule: "required",
        errorMessage: "Phone number is requered"
    },
    {
        rule: "function",
        validator: function(){
            const phone = tel.inputmask.unmaskedvalue();//получить каноникал телефон 
        return phone.length === 9;
        },
        errorMessage: "Please enter a valid phone number"
    }
])
.onSuccess(event => {
    let formData= new FormData(event.target)
    console.log(...formData)
} )