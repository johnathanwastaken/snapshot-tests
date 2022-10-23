import Profile from "./GitHubCard"
import renderer from "react-test-renderer"

test('Testing for snapshot', () => {
    const tree = renderer.create(<Profile/>).toJSON()
    expect(tree).toMatchSnapshot()
})