const User = require("../models/User.js")

export const createUser = async (req, res) => {
    try {
      const newUser = req.body
      const user = new User.Users(newUser);
      await post.save();
  
      res.status(200).json(post);

    } catch (err) {
      res.status(500).json({ error: err });
    }
  };

export const  LoginUser = async (req, res) => {
	const { username, password } = req.body

	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Missing username and/or password' })

	try {
		const user = await User.findOne({ username })
		if (!user)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })

		const passwordValid = await argon2.verify(user.password, password)
		if (!passwordValid)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })

		const accessToken = jwt.sign(
			{ userId: user._id },
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'User logged in successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}