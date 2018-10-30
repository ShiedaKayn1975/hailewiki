# Scaffold

## Generate
rails g scaffold lesson_evaluation --skip

# Generate with namespace
rails g scaffold Admin::Lesson::Generic --model-name=Lesson::Generic type:string code:string name:string --skip


rails g scaffold Admin::Lesson::Vocabulary code:string name:string direction:string --skip --model-name=Lesson::Vocabulary

rails g scaffold Admin::Lesson::Instruction code:string name:string direction:string --skip --model-name=Lesson::Instruction

rails g scaffold Admin::User name:string email:string password:string --skip --model-name=User

rails g scaffold Admin::Curriculum name:string --skip --model-name=Curriculum