import oscar_pic from "./assets/profile_pics/oscar.png"
import jeff_pic from "./assets/profile_pics/jeff.png"
import julianna_pic from "./assets/profile_pics/julianna.png"
import sarah_pic from "./assets/profile_pics/sarah.png"

export function getMockCardData() {
    return  [
        {
            name: "Sarah Foxx",
            position: "Owner, CEO",
            id: "15-26669-890",
            businessName: "Sunnyside Up Day Care",
            imgSrc: sarah_pic
        },
        {
            name: "Jeffrey R. Bott",
            position: "Leading Partner",
            id: "86-97432-123",
            businessName: "Bott and Sons Accounting",
            imgSrc: jeff_pic
        },
        {
            name: "Julianna Alvarez",
            position: "Founder",
            id: "72-36924-486",
            businessName: "Spaw Retreat Dog Grooming",
            imgSrc: julianna_pic
        },
        {
            name: "Oscar Wilder",
            position: "CEO, Engineer",
            id: "64-16497-726",
            businessName: "Endurance.AI",
            imgSrc: oscar_pic
        }
    ];
}