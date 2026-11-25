import pygame
import random
import sys

# Initialize pygame
pygame.init()

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (213, 50, 80)
GREEN = (0, 255, 0)
BLUE = (50, 153, 213)

# Screen dimensions
WIDTH, HEIGHT = 600, 400
BLOCK_SIZE = 10
SPEED = 15

# Set up display
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption('Snake Game')

clock = pygame.time.Clock()
font_style = pygame.font.SysFont("bahnschrift", 25)
score_font = pygame.font.SysFont("comicsansms", 35)


def show_score(score):
    value = score_font.render(f"Score: {score}", True, WHITE)
    screen.blit(value, [10, 10])


def draw_snake(snake_list):
    for block in snake_list:
        pygame.draw.rect(screen, GREEN, [block[0], block[1], BLOCK_SIZE, BLOCK_SIZE])


def message(msg, color, y_offset=0):
    mesg = font_style.render(msg, True, color)
    text_rect = mesg.get_rect(center=(WIDTH / 2, HEIGHT / 2 + y_offset))
    screen.blit(mesg, text_rect)


def game_loop():
    game_over = False
    game_close = False

    x = WIDTH / 2
    y = HEIGHT / 2

    x_change = 0
    y_change = 0

    snake_list = []
    snake_length = 1

    food_x = round(random.randrange(0, WIDTH - BLOCK_SIZE) / 10.0) * 10.0
    food_y = round(random.randrange(0, HEIGHT - BLOCK_SIZE) / 10.0) * 10.0

    while not game_over:

        while game_close:
            screen.fill(BLACK)
            message("You Lost! Press Q-Quit or C-Play Again", RED)
            show_score(snake_length - 1)
            pygame.display.update()

            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    game_over = True
                    game_close = False
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_q:
                        game_over = True
                        game_close = False
                    if event.key == pygame.K_c:
                        game_loop()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT and x_change != BLOCK_SIZE:
                    x_change = -BLOCK_SIZE
                    y_change = 0
                elif event.key == pygame.K_RIGHT and x_change != -BLOCK_SIZE:
                    x_change = BLOCK_SIZE
                    y_change = 0
                elif event.key == pygame.K_UP and y_change != BLOCK_SIZE:
                    y_change = -BLOCK_SIZE
                    x_change = 0
                elif event.key == pygame.K_DOWN and y_change != -BLOCK_SIZE:
                    y_change = BLOCK_SIZE
                    x_change = 0

        # Check boundary collision
        if x >= WIDTH or x < 0 or y >= HEIGHT or y < 0:
            game_close = True

        x += x_change
        y += y_change
        screen.fill(BLACK)

        # Draw food
        pygame.draw.rect(screen, RED, [food_x, food_y, BLOCK_SIZE, BLOCK_SIZE])

        snake_head = [x, y]
        snake_list.append(snake_head)
        if len(snake_list) > snake_length:
            del snake_list[0]

        # Check self collision
        for block in snake_list[:-1]:
            if block == snake_head:
                game_close = True

        draw_snake(snake_list)
        show_score(snake_length - 1)

        pygame.display.update()

        # Check if snake ate food
        if x == food_x and y == food_y:
            food_x = round(random.randrange(0, WIDTH - BLOCK_SIZE) / 10.0) * 10.0
            food_y = round(random.randrange(0, HEIGHT - BLOCK_SIZE) / 10.0) * 10.0
            snake_length += 1

        clock.tick(SPEED)

    pygame.quit()
    sys.exit()


if __name__ == "__main__":
    game_loop()