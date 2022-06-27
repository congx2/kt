import router from "./router.js"

const useRouter = app => {
  app.use(router.routes())
  app.use(router.allowedMethods())
}

export default useRouter
