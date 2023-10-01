import { app } from "./controller/app"
import { userRouter } from "./controller/routes/userRouter"
import { recipeRouter } from "./controller/routes/recipeRouter"
import { followRouter } from "./controller/routes/followRouter"


app.use('/user', userRouter)

app.use('/recipe', recipeRouter)

app.use('/follow', followRouter) 