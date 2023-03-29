// skills expert/intermediate/basic switch animation
const SkillSwitch = (CONF, i) => {
    CONF.skillsLevels.innerHTML = CONF.skillsLevel[i];
    CONF.skills.style.right = `${100*i}%`;
    for (let j=0; j<3; j++) {
        CONF.options[j].style.opacity = j === i ? '100%' : '50%';
    }
}

export { SkillSwitch };
