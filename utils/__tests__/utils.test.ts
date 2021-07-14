import { handleize } from "../index"

describe("handleize", () => {
  it("should transform the string to lowercase ", () => {
    expect(handleize("Firstname")).toEqual("firstname")
  })

  it("should replace spaces with dashes", () => {
    expect(handleize("Firstname Lastname")).toEqual("firstname-lastname")
  })

  it("should remove accents from letters", () => {
    expect(handleize("Marie Hélène Delorme")).toEqual("marie-helene-delorme")
  })
})
