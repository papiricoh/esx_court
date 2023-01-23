// import { createApp } from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        debug_mode: true,
        page: 'home',
        user_identifier: 'steam:0000000001',
        user_full_name: 'Lucca Noriega-Litcher IV',

        //Cases page
        case_title: "Cases page",
        case_demandant_id: { id: "steam:00000001", full_name: "John Doe" },
        case_accused_id: { id: "steam:00000002", full_name: "Marie Sue" },
        case_body: "Wellcome to the cases page, select the case in the list to the left, with the deseable name",
        sentence: "Pending sentence...",


        //LawsuitEditor
        recomended_jailtime_int: 0,

        current_case: "none",
        penal_cases: [
            { index: 0, shortTitle: "Penal", title: "Esto es un caso penal", desc: "lorem" }
        ],
        civil_cases: [
            { index: 0, shortTitle: "Civil", title: "Esto es un caso civil", desc: "lorem" }
        ],
        government_cases: [
            { index: 0, shortTitle: "Government", title: "Esto es un caso guvernamental", desc: "lorem" }
        ],
        felonies: [
            { name: "Felony1", type: "civil", jail_time: 0 },
            { name: "Felony3", type: "civil", jail_time: 0 },
            { name: "Murder", type: "penal", jail_time: 16 },
            { name: "Kidnaping", type: "penal", jail_time: 10 },
            { name: "Mass Murdering", type: "penal", jail_time: 100 },
        ],
        selected_felonies: []

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
        },
        recomeded_jailtimeToString(jailTime) {
            if (jailTime > 100) {
                return "Wanted JailTime (Recomended: life in prison)";
            }
            return "Wanted JailTime (Recomended: " + jailTime + " years)";
        },
        modifyRecomendedJailTime(felony) {
            let felonySelectedIndex = this.isFelonySelected(felony)
            if (felonySelectedIndex != -1) {
                this.recomended_jailtime_int += -felony.jail_time
                this.selected_felonies[felonySelectedIndex] = null
            } else {
                this.selected_felonies[this.getNextEmptyInList(this.selected_felonies)] = felony
                this.recomended_jailtime_int += felony.jail_time
            }
        },
        isFelonySelected(felony) {
            for (let index = 0; index < this.selected_felonies.length; index++) {
                if (this.selected_felonies[index] == felony) {
                    return index;
                }
            }
            return -1;
        },
        getNextEmptyInList(list) {
            let nextEmpty = 0
            for (let index = 0; index < list.length; index++) {
                nextEmpty++

            }
            return nextEmpty
        }
    },
    computed: {

    },
    components: {

    },
})