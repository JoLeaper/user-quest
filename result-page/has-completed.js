export const hasCompleted = (user) => {
    let hasCompleted = false;
    let i = 0;

    if (user !== null) {
        for (let [, value] of Object.entries(user['completed'])) {
            if (value === true) {
                i++;
            }   
        }

        if (i > 7) {
            hasCompleted = true;
        }






    }

    return hasCompleted;
};

