import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("Auth reducer", () => {
  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      errorMessage: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("Should store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          errorMessage: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          payload: {
            token: "some-token",
            userId: "some-userId",
          },
        }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-userId",
      error: null,
      errorMessage: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
