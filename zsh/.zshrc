# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Path to your oh-my-zsh installation.
export ZSH="/Users/blucky/.oh-my-zsh"


# Use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
HYPHEN_INSENSITIVE="true"
# Enable command auto-correction.
ENABLE_CORRECTION="true"

# Display red dots whilst waiting for completion.
COMPLETION_WAITING_DOTS="true"

plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

export LANG=en_US.UTF-8

if [ -f ~/.config/zsh/zshalias ]; then
    source ~/.config/zsh/zshalias
else
    print "404: ~/.config/zsh/zshalias not found."
fi

if [ -f ~/.config/zsh/zshplugins ]; then
    source ~/.config/zsh/zshplugins
else
    print "404: ~/.config/zsh/zshplugins not found."
fi

# Preferred editor for local and remote sessions
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vim'
else
  export EDITOR='nvim'
fi

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
