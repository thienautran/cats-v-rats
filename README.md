# welcome to Cats vs Rats!
![cats vs rats, a picture showing the game board](https://github.com/thienautran/FIT3146-cat-mouse-game-app/assets/86794057/fd48056a-b77a-48fc-a245-13b95ac477ca)


This app accompanies the cat’s vs rats board game and directly interfaces with raspberry pi on the server. 

## What is Cats Vs Rats? 
This game is placed on a 7x7 tile board with walls and mountains blocking paths and areas. These obstacles are randomised each game to ensure that no two experiences are the same. 
It’s a game that involves two players, each playing as the cat or the rats team in turns. The cat has to consume all the rats as fast as possible whilst the rats have to survive as long as they can. Whichever player manages to consume all the rats fastest wins! 

To aid the rats in their struggle against the cat, they all have special abilities which they should use wisely, namely the power to build walls, hop walls, delay the cat, and to escape diagonally. Watch out though, if the cat manages to consume a rat, the cat will absorb the rat’s ability and grow ever stronger. 

As the rats refuse to break their ranks even when facing death, they move one by one in a predefined order and the cat moves between the rats each turn. E.g. Ratticus Finch, then Grim Reaper, then Ratthew R. Mani and then Grim reaper again. Throughout the gameplay, all the movements of the characters are tracked via electronics, meaning that the moves are recorded and sent to the web app. The web app then provides visual and audio feedback to the players.

# framework

Written in Svelte and leveraging Svelte Kit, this app uses javascript as a base.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
