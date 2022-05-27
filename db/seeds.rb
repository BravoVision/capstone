user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

# --------------------------------------------------


tasks = [
  {
   title: 'Beach Day',
   details: 'Pack food for everyone, get all necessary supplies, bring change of clothes.'
  },
  {
   title: 'Friday Fun',
   details: 'Get dressed up fancy for a girls dinner.'
  },
  {
    title: 'Grocery Shopping',
    details: 'Make sure to pick up dinner on the way from the grocery store.'
  }
]

tasks.each do |each_task|
  user.tasks.create each_task
  puts "creating task #{each_task}"
end


