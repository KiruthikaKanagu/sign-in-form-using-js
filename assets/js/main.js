import JustValidate from "just-validate";

const formEl = document.getElementById("courier-request")

const validate = new JustValidate(formEl);

// to add the rules for the fields 
validate.addField('#name', [
    {
        rule: "required",
    },
    {
        rule: "minLength",
        value: 3,
    },
    {
        rule: "maxLength",
        value: 20,
    }
], { errorLabelCssClass: ['text-sm'] }
)

validate.addField('#number', [
    {
        rule: 'number',
    },
    {
        rule: "required",
    },
    {
        rule: "minLength",
        value: 10,
    },
    {
        rule: "maxLength",
        value: 10,
    }
], { errorLabelCssClass: ['text-sm'] }
)

validate.addField('#date', [
    {
        rule: "required",
    },
], { errorLabelCssClass: ['text-sm'] }
)


validate.addField('#address', [
    {
        rule: "required",
    },
], { errorLabelCssClass: ['text-sm'] }
)
