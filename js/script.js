new Vue({
    el: "#app",
    
    data:{
        activeIndex: 0,
        userMessage: '',
        nameContact: '',
        rightClick: false,
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
        
    },

    // <---------------------------------------------------------------------------------------------------------------> \\
        
    methods:{

        // click on left contacts open conversation in right part
        openConversastion: function(index) {
            this.activeIndex = index
        },

        // Last access
        contactLastDate: function(index) {
            const messages = this.contacts[index].messages
            const lastIndex = messages.length - 1
            const lastDate = messages[lastIndex].date
            return lastDate
        },  

        // message:
        // date (day.js)
        currentDate: function() {
            const d = new Date()
            let dateString = d.toLocaleString()
            dateString = dateString.replace(',', '')
            return dateString
        },

        // replay --> into "to send"
        autoReplay: function() {
            const replay = {
                date: this.currentDate(),
                text: 'Ok!',
                status: 'received',
            }
            this.contacts[this.activeIndex].messages.push(replay)
        }, 

        // to send
        sendMessage: function() {
            const newMessageObject = {
                date: this.currentDate(),
                text: this.userMessage,
                status: 'sent',
            }
            this.contacts[this.activeIndex].messages.push(newMessageObject);
            this.userMessage = '';

            // replay
            let that = this;
            setTimeout(function() {
                that.autoReplay()
            }, 1000);
        },

        // to filter contacts
        contactSearch: function() {
            this.contacts.forEach((element) => {
               if (element.name.toUpperCase().includes(this.nameContact.toUpperCase())) {
                   //to uppercase per non avere problemi di maiuscole/minuscole
                   element.visible = true
               } else {
                   element.visible = false
               }
           })
       },
    }        
})
Vue.config.devtools = true;