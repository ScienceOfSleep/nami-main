Quick stat reference tool for League of Legends. I like to compare ability ranges during the initial game-load, but stats are clunky and poorly documented . Should be a nice data-vis project as it's useful for me, useful for others,  and there's a whole lot of room for edge cases and scope creep.


Set up a database with all the stats on MongoDB. Goal is to connect to that once at build time, then have that static content displayed dynamically via React. I'd like other people to be able to use this, but I don't have any plans to monetize it so I'd rather not pay a premium if it develops a steady userbase so having all the DB stuff done at build time will let me keep it static(aka cheap). 
