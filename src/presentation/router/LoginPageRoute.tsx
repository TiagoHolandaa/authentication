import { useRouter } from "next/navigation";
import { APP_ROUTES } from "../constants/appRouter";

export default class LoginPageRoute {
  private router;

  constructor() {
    this.router = useRouter();
  }

  navigateToHomePage() {
    this.router.push(APP_ROUTES.public.signin);
  }
}