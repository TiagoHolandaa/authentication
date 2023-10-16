import { useRouter } from "next/router";

class LoginPageRoute {
  private router;

  constructor() {
    this.router = useRouter();
  }

  navigateToHomePage() {
    this.router.push("/");
  }
}

export default LoginPageRoute;
