// import { createApp } from 'vue'
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            debug_mode: true,
            page: 'home',
            user_identifier: 'steam:0000000001',

            //Cases page
            case_title: "Cases page",
            case_demandant_id: { id: "steam:00000001", full_name: "John Doe" },
            case_accused_id: { id: "steam:00000002", full_name: "Marie Sue" },
            case_body: "Wellcome to the cases page, select the case in the list to the left, with the deseable name",
            sentence: "Pending sentence...",

            current_case: "none",
            penal_cases: [
                { index: 0, shortTitle: "Penal", title: "Esto es un caso penal", desc: "lorem" }
            ],
            civil_cases: [
                { index: 0, shortTitle: "Civil", title: "Esto es un caso civil", desc: "lorem" }
            ],
            government_cases: [
                { index: 0, shortTitle: "Government", title: "Esto es un caso guvernamental", desc: "lorem" }
            ]

        }
    },
    methods: {
        changeCasePage(type, i) {
            if (type == "penal") {
                for (let index = 0; index < this.penal_cases.length; index++) {
                    //console.log(this.penal_cases[index].shortTitle)
                    if (i == index) {
                        this.case_title = this.penal_cases[index].title,
                            this.case_body = this.penal_cases[index].desc
                    }
                }
            }
            else if (type == "civil") {
                for (let index = 0; index < this.civil_cases.length; index++) {
                    //console.log(this.civil_cases[index].shortTitle)
                    if (i == index) {
                        this.case_title = this.civil_cases[index].title,
                            this.case_body = this.civil_cases[index].desc
                    }
                }
            }
            else if (type == "government") {
                for (let index = 0; index < this.government_cases.length; index++) {
                    //console.log(this.government_cases[index].shortTitle)
                    if (i == index) {
                        this.case_title = this.government_cases[index].title,
                            this.case_body = this.government_cases[index].desc
                    }
                }
            }
        }
    },
    computed: {

    }
})


app.mount('#app')
