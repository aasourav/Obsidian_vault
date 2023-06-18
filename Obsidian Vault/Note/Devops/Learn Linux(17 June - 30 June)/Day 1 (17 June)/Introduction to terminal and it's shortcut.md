
### `man`

if we want to need help on **Linux command** 
type
		`man which_command_we_want_to_explore`
this command will show me the documentation of this command.
`man -k "what you want to search"`

` /search_keyword`   ,   `shift + ` next result
search backward `?search_keyword`

press `g` to go first line of the page

`type command`  it will show me this command is shell build in or executable file or a shell build in . 
if it's show `alias is a shell builtin`

`help shell_builtin_command`   `man` command is only for executable command , and `help` is for builtin commands doc.

another way for common -  `command --help`


## Linux command structure
`ping`  command is used test the network connectivity to destination host.

`command command_options options_value command_argument`
ex: `ping -c 1 google.com`

`df` command is for displays information about the file system and the disk space use it.

## keyboard shortcut

`ctrl + L` ==> clear the terminal
`ctrl + d` ==> exit the terminal
`ctrl + A` ==> go to the beginning of the line
.au.  `up arrow key` prev command
`ctrl + e` ==> move the cursor to the end
`ctrl + u` ==> clear the line.
`ctrl + c` ==> interrupt the command that is running process
`ctrl + g` ==> pause the running process. we can resume it later using `bg %1`

## bash command history

`cat .bash_history`  => will display the history or `hiostory`
`echo $HISTFILESIZE`  => will return total number of history
`echo $HISTSIZE` => will show the how many history will store  
`!17` => if we want to run 17th number command `-7` is last 7 number
`!command:p` => get history command text. if we remove :p then it will run
`ctrl + r` => now when I start type the command it will show me the command if exist  . `ctrl + g` leave the searching mode (means will not who the command)
`history -d line_number` delete specific command from history
`history -c` delete all the history

`tab_key` for command auto completion
`HISTTIMEFORMAT="%d/%m/%y %T"`  now we can show the time alongside the history.

`echo "this is text" >> file_name` this is for if you want to write text in the specific file. single > is override the content. >> is for concat the content

`sudo groupadd grp_name` create a group in system
`sudo useradd user_name` create a user
`sudo -k` remove user credentials
`sudo passwd user_name` change the password

`root` directory is the top level directory

## Linux terminal running without trace

when I run an command just before command give white space . then it will not save in the history.
but in centOS it will not track.
		`echo $HISTCONTROL` => by using histcontrol `HISTCONTROL=ignorewhitespace`
ignore duplicate command = `HISTCONTOL=ignoredups` 
if you wanna ignore both just type `ignoreboth`

`tree` is for show the directory tree. initially it's not installed. you have to install it first.

### command redirection and piping

![[Pasted image 20230617232312.png]]

if we want to redirect the output : 
`echo "abc" >> abc.txt`  => stdout `1` before >> is optional
if we want to redirected the error 
`echo "abc" 2>> err.txt` 
remember > is for existing file.  >> is for if file does not exist then it will create a file and then write the content
if we want to make is same line.
`echo "abc" > success.txt 2> error.txt`
if we wanna both then => `echo "abc" > output.txtt 2>&1`

`ifconfig | grep ehter` => print the specific
`cmnd   pipe command string` 

![[Pasted image 20230617234027.png]]

`cut` (have to google it)
`cut -d":" -f1 etc/passwd`  
first it divide on basis of ":" then `-f1` means filed number. if we want to first filed then it will show the first divided content

`tee who> user.txt` will redirect and print screen both.

`cmp`  compare two files
`cmp a.txt b.txt`
 
