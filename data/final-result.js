// HP-based messages:
const goodHp = {
    message: `Your team is in great shape, and you are able to defeat all members of the Elite Four without issue!`
},

const okayHp = {
    message: `Your team has taken some damage along the way, but they stand strong in the face of the challenge! The Elite Four is defeated!`
},

const lowHp = {
    message: `Your team fought hard in the previous battles and are barely holding on! By some miracle, you manage to defeat The Elite Four!`
},

const goodExp = {
    message: `you engage in an intense battle! All of the experience you've culminated to this point leads to an intense battle, with you
    defeating them and taking the title for yourself! You are a natural-born trainer, and enjoy an undefeated reign as Pokemon League Champion!`
},

const okayExp = {
    message: `you fight a difficult battle! You fight tooth and nail against the Champion, winning the title by the skin of your teeth!
    You enjoy a moderate reign as Champion, but are eventually dethroned by a plucky young challenger.`
},

const lowExp = {
    message: `you fight an uphill battle! The Champion's stands on the experience he has built up from years of battling, towering above
    you. You give it your all until the end, but ultimately fall short.`
},


export const hpArray = [goodHp, okayHp, lowHp];
export const expArray = [goodExp, okayExp, badExp];
