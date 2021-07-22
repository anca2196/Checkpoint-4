CREATE DATABASE checkpoint4;

CREATE TABLE IF NOT EXISTS `diary` (
    `testimony_id` INT NOT NULL AUTO_INCREMENT,
    `kanye_quote` VARCHAR(1000),
    `fan_testimony` VARCHAR(1000),
    `rating` INT,
    PRIMARY KEY (`testimony_id`)
);

INSERT INTO diary(testimony_id, kanye_quote, fan_testimony, rating) VALUES (1, 'For me to say I wasn’t a genius, I would just be lying to you and to myself.','This quote is exactly how I feel. Kanye gets me', 5);

INSERT INTO diary(testimony_id, kanye_quote, fan_testimony, rating) VALUES (2,'50 is Eminem’s favourite rapper. I’m my favourite rapper.', "Can you even hold it against him? I'd be my favourite rapper too if I were Kanye.", 4);

INSERT INTO diary(testimony_id, kanye_quote, fan_testimony, rating) VALUES (3, "One of my biggest Achilles heels has been my ego. And if I, Kanye West, can remove my ego, I think there’s hope for everyone.", "This man is so inspirational... I feel awakened", 5);